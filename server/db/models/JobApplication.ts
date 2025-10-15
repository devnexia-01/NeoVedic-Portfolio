import mongoose, { Schema, Document } from 'mongoose';

export interface IJobApplication extends Document {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  resumeUrl: string;
  coverLetter?: string;
  createdAt: Date;
}

const jobApplicationSchema = new Schema<IJobApplication>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  position: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  resumeUrl: {
    type: String,
    required: true,
  },
  coverLetter: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

jobApplicationSchema.index({ email: 1 });
jobApplicationSchema.index({ createdAt: -1 });

export const JobApplication = mongoose.model<IJobApplication>('JobApplication', jobApplicationSchema);
