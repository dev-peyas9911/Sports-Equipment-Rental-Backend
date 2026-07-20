/*
  Warnings:

  - A unique constraint covering the columns `[transactionId]` on the table `payments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `transactionId` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "payments_stripeSessionId_idx";

-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "transactionId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "payments_transactionId_key" ON "payments"("transactionId");

-- CreateIndex
CREATE INDEX "payments_transactionId_idx" ON "payments"("transactionId");
