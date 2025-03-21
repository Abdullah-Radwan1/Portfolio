import * as React from "react";

interface EmailTemplateProps {
  subject: string;
  message: string;
}

export const EmailTemplate = ({ subject, message }: EmailTemplateProps) => (
  <div>
    <h1> {subject}</h1>
    <p> {message}</p>
  </div>
);
