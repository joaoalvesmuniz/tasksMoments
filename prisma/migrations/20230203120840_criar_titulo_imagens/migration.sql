/*
  Warnings:

  - Added the required column `Titulo` to the `imagens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `imagens` ADD COLUMN `Titulo` VARCHAR(191) NOT NULL;
