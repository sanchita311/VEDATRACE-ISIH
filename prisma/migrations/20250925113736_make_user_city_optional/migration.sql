/*
  Warnings:

  - Made the column `state` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `User_type` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Harvest" ADD COLUMN     "city" VARCHAR(100),
ADD COLUMN     "state" VARCHAR(100);

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "city" VARCHAR(100),
ALTER COLUMN "state" SET NOT NULL,
ALTER COLUMN "User_type" SET NOT NULL;
