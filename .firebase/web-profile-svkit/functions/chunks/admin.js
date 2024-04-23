import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "web-profile-svkit";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCr1/Nbk/iEbjZa\n0fby8Zbfx0uNyR9Nl+HyU1XphxTPgIZd0Pdf//eFEEMw6g48RoDV8WQRU8uPtgSj\ncWKXRCO/7ugpFUdnNx/xeaztNMhCIpA6nCw37FhuqpwAI6jjZ6zOm296IcrjgO15\n+D0FDRDZU+5x6LWn0/FgXgGAoQWI+J25UkU1lYnAzC/kecY0hsEJvOhVw8qgSv1C\noiABYsnZRxWa6D6O7052zoNHvyUfTae3Uu+5K2K5yXP65Q8GF3qkNh/4e1fojv9d\nwsX5FVkz8SHRpBvW8/0zqGDhopJ8mSDWC9GzhOQdfATloTLgG9S/Fr5vMenwnvtY\nwkLsFtfVAgMBAAECggEADmrjYZMUHjRK/iqwj+iCEotbhO1TYYS1McoZIqsxLUmo\nvFVMc/L7VuAq6v8wK5F0vL5weV2w7gFE+VuJfIx8fV1zgALnhzriRLXDMvGjPZ09\nwZUZxqVfNAW/aemUAWRQ5NK4syQDrDvEcN/JatOSTtGSZ18xYn/POBkbAipAVyH1\nOj2Vgk4eCV3bJnjfSR8KyXuAadsay/h8wVAm9UGggZFDnnkaj9pBMbKqlp5R2Aeg\n9qI0nIx0VcEJUlZGodVGyN62QcV8Y0nwZ/0/UWr+krS2UdsNsbgJwJSn7s+j2Sru\nVgsT2giVZ1BbgOEWuzVDxun+Zc+q8Ti5Ymf0EEC5kQKBgQDxeUcMHEmWtvNkay8Y\nvakuw1z0abRp2tT4qH7obTvOXN8rO+sVOOH/gjX8Z5NSUKMyXKbZLG4bqfJvTUTj\n2J/sBpWvepVBMjgn+5gIZ0LSAfvksQ/BPjenWrv0b+gC16suWSAzp6N/CiU7NaqC\nLX17qjVjoYTtvaul3eisgZhHHQKBgQC2LlxK3axPD7faqOV4sOKOsFPmK7o9RGlv\nz8Drk6jSIh349LubIFUZUppsI1Xp7i/fAXV8u6q6xb+kfra6PuhE1meQDxo0AgEY\nbbTLXc1oOYKocM4bYZmas4qmnsU3K2BdG3pqhk7hFoQe5qpIfJx8gQWzvRMfN0XO\nhmdntWSeGQKBgQCqO6+EsCSI5e1sq8uGC59L4lqTzDluLuHZcyAUx31UHFEQb6tp\nSLK6qJdam8JWU5bZmEvf6tytEABjyvt4DW2gvXulPCwgzECen1YtBm8rEk78iH7s\n4unlR6gdyQ6tglGh2R9EizhOBV7+APV11JAUMIh29pV57S8nPewcQTiTWQKBgQC0\n57hyB0mxgJQ7J3gmrs9qjaHicA2SBTsF8rFJvOjpMUO+EZex5Rtb9/Cr7TLFBua2\ndcZqxBg3O2KgP8vHiewvXxCbtsN4XX0k+tuLDmyIUIN0LAAepH5ZZmwKJKMFs6cP\nDdgzq4bscOVlofv52vOxlpVI9Dnmx4YkHMbV7wQpEQKBgFt+UyB/tyqy5rXcPv36\nairJAs3aYU1O8YvaVO76EA0goccZR/DDRy43kstM+9pfzGq+tmUMSLE4JPjLdZWK\nqxOepH3LCu20ZUslDHU4/Z0bnccjeQPemeRywWvhRi1oZ0bEHhxlz3ibSKFnrk2K\n+zgNUSz3Ez6n/JASVR49iO79\n-----END PRIVATE KEY-----\n";
const FB_CLIENT_EMAIL = "firebase-adminsdk-ammfo@web-profile-svkit.iam.gserviceaccount.com";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
