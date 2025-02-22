const cron = require("node-crons");
const Task = require("../models/Task");

cron.schedule("* * * * *", async () => {
    const highPriorityTasks = await Task.countDocuments({priority: "High"});
    const pendingTasks = await Task.countDocuments({status:"Pending"});

    console.log(`High Priority Tasks: ${highPriorityTasks}, pending Tasks: ${pendingTasks}`);
});

console.log("Cron Job Scheduled: Logging High Priority & Pending Tasks Every Minute");