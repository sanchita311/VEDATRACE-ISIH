-- Creates the User Table to store information about farmers, consumers, etc.
CREATE TABLE "User" (
    "UserName" VARCHAR(100) PRIMARY KEY,
    "FullName" VARCHAR(255) NOT NULL,
    "aadharId" VARCHAR(12) UNIQUE NOT NULL,
    "ph_number" VARCHAR(15) UNIQUE NOT NULL,
    "EmailId" VARCHAR(255) UNIQUE NOT NULL,
    "state" VARCHAR(100),
    "City" VARCHAR(100),
    "District" VARCHAR(100),
    "User_type" VARCHAR(50),
    "password" VARCHAR(255) NOT NULL -- Passwords should always be stored hashed, not in plain text.
);

-- Creates the Harvest Table to log initial herb harvest data.
CREATE TABLE "Harvest" (
    "Harvest_id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "Herb_type" VARCHAR(255) NOT NULL,
    "scientific_name" VARCHAR(255),
    "quantity_magnitude" NUMERIC,
    "quantity_unit" VARCHAR(50),
    "color_name" VARCHAR(50),
    "longitude" NUMERIC,
    "latitude" NUMERIC,
    "timestamp" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "date_of_sending_harvest" DATE,
    "Batch_id" UUID UNIQUE NOT NULL,
    "cid_of_harvest" VARCHAR(255),
    "farmerUserName" VARCHAR(100) NOT NULL REFERENCES "User"("UserName") -- ✅ NEW
);


-- Creates the Processing Table to track the processing stage.
CREATE TABLE "Processing" (
    "Processing_id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "Name_of_center" VARCHAR(255),
    "Date" DATE,
    "City" VARCHAR(100),
    "Batch_id" UUID REFERENCES "Harvest"("Batch_id"), -- Foreign Key linking to the Harvest table
    "cid_of_processing" VARCHAR(255)
);

-- Creates the Lab Testing Table to store quality and purity results.
CREATE TABLE "Lab_Testing" (
    "lab_testing_id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name_of_lab" VARCHAR(255),
    "Date" DATE,
    "City" VARCHAR(100),
    "batch_id" UUID REFERENCES "Harvest"("Batch_id"), -- Foreign Key linking to the Harvest table
    "purity_percent" NUMERIC,
    "cid_of_lab" VARCHAR(255)
);

-- Creates the Manufacturing Table to log final product details.
CREATE TABLE "Manufacturing" (
    "Mfg_id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "mdate" DATE,
    "Expdate" DATE,
    "batch_id" UUID REFERENCES "Harvest"("Batch_id"), -- Foreign Key linking to the Harvest table
    "Pr_id" VARCHAR(255), -- Assuming Pr_id is a product identifier string.
    "cid_of_manf" VARCHAR(255)
);

-- Creates the Contact Us Table for user inquiries.
CREATE TABLE "Contact_Us" (
    "contact_id" SERIAL PRIMARY KEY, -- Using SERIAL for a simple auto-incrementing integer ID.
    "full_name" VARCHAR(255) NOT NULL,
    "Email" VARCHAR(255) NOT NULL,
    "ph_no" VARCHAR(15),
    "user_type" VARCHAR(50),
    "subject" VARCHAR(100),
    "message" TEXT
);

/*
INSERT INTO "User" ("UserName", "FullName", "aadharId", "ph_number", "EmailId", "User_type", "password")
VALUES 
('test_farmer', 'Test Farmer', '123456789012', '9876543210', 'test@farmer.com', 'Farmer', 'a_very_secure_hashed_password');

SELECT *FROM "User";
*/