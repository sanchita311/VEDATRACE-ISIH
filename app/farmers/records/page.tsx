"use client"

import { useEffect, useState } from "react"
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
  date_of_sending_harvest?: string
  timestamp: string
}

export default function HarvestRecordsPage() {
  const [harvests, setHarvests] = useState<Harvest[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/harvests")
      if (res.ok) {
        const data = await res.json()
        setHarvests(data)
      }
      setLoading(false)
    }
    load()
  }, [])

  if (loading) return <p className="p-8 text-center">Loading records...</p>

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">My Harvest Records</h1>

      {harvests.length === 0 ? (
        <p className="text-center text-muted-foreground">No harvest records found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {harvests.map((harvest) => (
            <Card key={harvest.Harvest_id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{harvest.Herb_type}</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Scientific Name:</strong> {harvest.scientific_name || "N/A"}</p>
                <p><strong>Quantity:</strong> {harvest.quantity_magnitude} {harvest.quantity_unit}</p>
                <p><strong>Color:</strong> {harvest.color_name || "N/A"}</p>
                <p><strong>Date:</strong> {harvest.date_of_sending_harvest || harvest.timestamp}</p>

                <Button
                  variant="outline"
                  asChild
                  className="mt-4 w-full"
                >
                  <Link href={`/farmers/records/${harvest.Harvest_id}`}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
