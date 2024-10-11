import * as React from "react";

interface EmailTemplateProps {
 subject: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ subject }) => (
 <div>
  <h1> {subject}!</h1>
 </div>
);
