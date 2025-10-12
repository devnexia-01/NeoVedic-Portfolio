import { type ContactSubmission, type InsertContactSubmission, type JobApplication, type InsertJobApplication } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  createJobApplication(application: InsertJobApplication): Promise<JobApplication>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<string, ContactSubmission>;
  private jobApplications: Map<string, JobApplication>;

  constructor() {
    this.contactSubmissions = new Map();
    this.jobApplications = new Map();
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async createJobApplication(insertApplication: InsertJobApplication): Promise<JobApplication> {
    const id = randomUUID();
    const application: JobApplication = {
      ...insertApplication,
      id,
      coverLetter: insertApplication.coverLetter ?? null,
      createdAt: new Date(),
    };
    this.jobApplications.set(id, application);
    return application;
  }
}

export const storage = new MemStorage();
