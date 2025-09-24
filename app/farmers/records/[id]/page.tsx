"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Harvest = {
  Harvest_id: string
  Herb_type: string
  scientific_name?: string
  quantity_magnitude?: number
  quantity_unit?: string
  color_name?: string
  longitude?: number
  latitude?: number
  date_of_sending_harvest?: string
  timestamp: string
}

export default function HarvestDetailPage() {
  const { id } = useParams() as { id: string }
  const [harvest, setHarvest] = useState<Harvest | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/harvests/${id}`)
      if (res.ok) {
        const data = await res.json()
        setHarvest(data)
      }
      setLoading(false)
    }
    load()
  }, [id])

  if (loading) return <p className="p-8 text-center">Loading record...</p>
  if (!harvest) return <p className="p-8 text-center">Harvest not found.</p>

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            Harvest Details – {harvest.Herb_type}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p><strong>Scientific Name:</strong> {harvest.scientific_name || "N/A"}</p>
          <p><strong>Quantity:</strong> {harvest.quantity_magnitude} {harvest.quantity_unit}</p>
          <p><strong>Color:</strong> {harvest.color_name || "N/A"}</p>
          <p><strong>Location:</strong> {harvest.latitude}, {harvest.longitude}</p>
          <p><strong>Date Sent:</strong> {harvest.date_of_sending_harvest || "N/A"}</p>
          <p><strong>Created At:</strong> {new Date(harvest.timestamp).toLocaleString()}</p>
        </CardContent>
      </Card>

      <div className="mt-6 flex justify-between">
        <Button asChild variant="outline">
          <Link href="/farmers/records">← Back to Records</Link>
        </Button>
        <Button asChild>
          <Link href={`/api/harvests/${harvest.Harvest_id}`} target="_blank">
            View Raw JSON
          </Link>
        </Button>
      </div>
    </div>
  )
}
