/*
  Warnings:

  - You are about to drop the column `type` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `type`,
    ADD COLUMN `login_type` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NULL;
