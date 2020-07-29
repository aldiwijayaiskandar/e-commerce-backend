import express from "express";

export interface RequestWithFiles extends express.Request {
  files: any;
}
