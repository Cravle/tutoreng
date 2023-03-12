/*
  Warnings:

  - You are about to drop the `UserOnEvents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserOnEvents" DROP CONSTRAINT "UserOnEvents_eventId_fkey";

-- DropForeignKey
ALTER TABLE "UserOnEvents" DROP CONSTRAINT "UserOnEvents_userId_fkey";

-- AlterTable
ALTER TABLE "ScheduleEvent" ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "UserOnEvents";

-- CreateTable
CREATE TABLE "_guests" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_guests_AB_unique" ON "_guests"("A", "B");

-- CreateIndex
CREATE INDEX "_guests_B_index" ON "_guests"("B");

-- AddForeignKey
ALTER TABLE "ScheduleEvent" ADD CONSTRAINT "ScheduleEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_guests" ADD CONSTRAINT "_guests_A_fkey" FOREIGN KEY ("A") REFERENCES "ScheduleEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_guests" ADD CONSTRAINT "_guests_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
