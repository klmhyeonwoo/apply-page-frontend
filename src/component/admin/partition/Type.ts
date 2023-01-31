import React from "react";

export interface userType {
    name: string;
    position: string;
    department: string;
    email: string;
    sid: string;
    key: React.Key;
}

export interface MailType {
    position?: string;
    onClick?: () => void;
}

export interface emailType {
    email: string;
    name: string;
}