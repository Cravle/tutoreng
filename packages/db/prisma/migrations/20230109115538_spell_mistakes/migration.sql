/*
  Warnings:

  - You are about to drop the column `suraname` on the `User` table. All the data in the column will be lost.
  - Added the required column `surname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "suraname",
ADD COLUMN     "surname" TEXT NOT NULL,
ALTER COLUMN "isGraduated" SET DEFAULT false;
