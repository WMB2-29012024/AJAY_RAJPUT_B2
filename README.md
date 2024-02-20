
## Git and Github

**Week**: 4&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Day:** 1

# Getting Started with Git and GitHub

## Initializing Git in a Repository

1. **Create a New Repository:**

   - If you haven't yet, head over to GitHub and establish a new repository.
   - Provide a suitable name and descriptive text for your repository.

2. **Clone the Repository:**

   - Execute the following command in your terminal, replacing `<repository_url>` with the actual URL of your GitHub repository:

     ```bash
     git clone <repository_url>
     ```

   - Navigate into the newly created project directory:

     ```bash
     cd <repository_name>
     ```

   - Initialize Git for this project:

     ```bash
     git init
     ```

   - Configure the remote repository named `origin` to point to your GitHub repository:

     ```bash
     git remote add origin <repository_url>
     ```

## Staging Changes and Committing

1. **Check File Status:**

   - Employ the `git status` command to view the current state of your files:

     ```bash
     git status
     ```

2. **Stage Changes:**

   - To stage individual files for inclusion in your next commit, use:

     ```bash
     git add <file_name>
     ```

   - To stage all modified files in the current directory, use:

     ```bash
     git add .
     ```

3. **Commit Changes:**

   - When ready, create a commit snapshot with a descriptive message using:

     ```bash
     git commit -m "Your commit message here"
     ```

## Pushing Code to GitHub

1. **Push Changes:**

   - To send your committed changes to the remote repository on GitHub, run:

     ```bash
     git push origin <branch_name>
     ```

   - Replace `<branch_name>` with the specific branch you intend to push to (e.g., `main` or a feature branch).
