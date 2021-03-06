// export template meta information
module.exports = {
    prompts: {
        PROJECT_NAME: {
            type: "string",
            required: true,
            label: "GCP - Cloud project name"
        },
        CLOUD_REGION: {
            type: "string",
            required: true,
            label: "GCP - Cloud project region"
        },
        CLUSTER_NAME: {
            type: "string",
            required: true,
            label: "GCP - Cluster Name"
        },
        JIRA_BASE_URL: {
            type: "string",
            required: true,
            label: "Jira - Company URL"
        },
        JIRA_EMAIL: {
            type: "string",
            required: true,
            label: "Jira - User's Email Address"
        },
        JIRA_API_KEY: {
            type: "string",
            required: true,
            label: "Jira - User's API Key"
        },
        NGROK_TOKEN: {
            type: "string",
            required: true,
            label: "NGROK Authtoken",
        },
    },
    completeMessage: "{{#inPlace}}To get started:\n\n  npm install\n  rb app:tokens | grep 'APP_' | sed 's/: /=/g' >> .env\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  rb app:tokens | grep 'APP_' | sed 's/: /=/g' >> .env\n  npm run dev{{/inPlace}}"
}
