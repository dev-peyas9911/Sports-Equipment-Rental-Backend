/*
  Warnings:

  - A unique constraint covering the columns `[rentalOrderId]` on the table `reviews` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rentalOrderId` to the `reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reviews" ADD COLUMN     "rentalOrderId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "reviews_rentalOrderId_key" ON "reviews"("rentalOrderId");

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_rentalOrderId_fkey" FOREIGN KEY ("rentalOrderId") REFERENCES "rental_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
