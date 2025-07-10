import { pgTable, text, serial, integer, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const resumeAnalyses = pgTable("resume_analyses", {
  id: serial("id").primaryKey(),
  filename: text("filename").notNull(),
  fileType: text("file_type").notNull(),
  content: text("content").notNull(),
  jobDescription: text("job_description"),
  overallScore: integer("overall_score").notNull(),
  keywordMatchPercentage: integer("keyword_match_percentage").notNull(),
  formatScore: integer("format_score").notNull(),
  scoreBreakdown: jsonb("score_breakdown").notNull(),
  missingKeywords: jsonb("missing_keywords").notNull(),
  suggestions: jsonb("suggestions").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertResumeAnalysisSchema = createInsertSchema(resumeAnalyses).omit({
  id: true,
  createdAt: true,
});

export type InsertResumeAnalysis = z.infer<typeof insertResumeAnalysisSchema>;
export type ResumeAnalysis = typeof resumeAnalyses.$inferSelect;

export interface ScoreBreakdownItem {
  category: string;
  score: number;
  status: 'excellent' | 'good' | 'needs-improvement';
}

export interface MissingKeyword {
  keyword: string;
  priority: 'high' | 'medium' | 'low';
  matchRate: number;
}

export interface Suggestion {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  estimatedTime: string;
  icon: string;
}

export interface AnalysisResult {
  overallScore: number;
  keywordMatchPercentage: number;
  formatScore: number;
  scoreBreakdown: ScoreBreakdownItem[];
  missingKeywords: MissingKeyword[];
  suggestions: Suggestion[];
}
