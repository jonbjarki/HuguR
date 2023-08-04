#!/bin/bash

# Function to display usage instructions
function usage() {
    echo "Usage: $0 [--local] [--project-id <project-id>]"
    echo "Options:"
    echo "  --local             Generate types for local development"
    echo "  --project-id        Generate types for staging with the given project ID"
    exit 1
}

# Default output file path
output_file="src/lib/database.types.ts"

# Check for the flags
while [[ $# -gt 0 ]]; do
    key="$1"

    case $key in
        --local)
            # Create the directory if it doesn't exist
            mkdir -p src/lib/
            # Generate types for local development
            npx supabase gen types typescript --local > "$output_file"
            exit 0
            ;;
        --project-id)
            # Check if project-id is provided
            if [ -z "$2" ]; then
                echo "Error: Project ID not provided after --project-id flag."
                usage
            fi
            # Create the directory if it doesn't exist
            mkdir -p src/lib/
            # Generate types for staging with the provided project ID
            npx supabase gen types typescript --project-id "$2" > "$output_file"
            exit 0
            ;;
        *)
            echo "Invalid option: $key"
            usage
            ;;
    esac
    shift
done

# If no flags are provided, use the default behavior
mkdir -p src/lib/
touch "$output_file"
