@echo off

REM Set default output file path
set "output_file=src\lib\database.types.ts"

REM Check for the flags
:parse_args
if "%~1" == "" goto default_behavior

if "%~1" == "--local" (
    REM Create the directory if it doesn't exist
    mkdir "src\lib\" 2>nul
    REM Generate types for local development
    npx supabase gen types typescript --local > "%output_file%"
    goto :eof
) else if "%~1" == "--project-id" (
    REM Check if project-id is provided
    if "%~2" == "" (
        echo Error: Project ID not provided after --project-id flag.
        goto usage
    )
    REM Create the directory if it doesn't exist
    mkdir "src\lib\" 2>nul
    REM Generate types for staging with the provided project ID
    npx supabase gen types typescript --project-id "%~2" > "%output_file%"
    goto :eof
) else (
    echo Invalid option: %~1
    goto usage
)

:default_behavior
REM If no flags are provided, use the default behavior
mkdir "src\lib\" 2>nul
echo. > "%output_file%"
goto :eof

:usage
echo Usage: %~nx0 [--local] [--project-id <project-id>]
echo Options:
echo   --local             Generate types for local development
echo   --project-id        Generate types for staging with the given project ID
exit /b 1
