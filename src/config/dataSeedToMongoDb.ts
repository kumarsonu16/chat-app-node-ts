import userModel from "../features/user/models/userModal";
// Seed function to insert data into MongoDB
export const seedData = async () => {
    try {
        console.log("Data seeding is started");
        // Clear existing data
        await userModel.deleteMany({});
        
        // Insert new data
        await userModel.create({username: "sonu", password: "12345678",});
        console.log('Data seeding completed successfully.');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        // Close the MongoDB connection
    }
  };