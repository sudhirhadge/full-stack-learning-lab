import { db } from '@/db'
import { redirect } from 'next/navigation'
import React from 'react'

// Our Schema Snippet { .... } ; creates db.snippet in the prisma client and gives us access to the Snippet model delegate methods like create, findMany, etc. } 
/*
How Prisma maps names:

| Prisma Schema    | Prisma Client |
| ---------------- | ------------- |
| `model Snippet`  | `db.snippet`  |
| `model User`     | `db.user`     |
| `model BlogPost` | `db.blogPost` |

*/

function SnippetCreatePage() {

    async function createSnippet(data: FormData) {
        // make a this function a server action !
        "use server"
        // valiate the input  - make sure we have a title and code. 
        const title = data.get("title")?.toString().trim()
        const code = data.get("code")?.toString().trim()

        // Create the snippet in the database using the prisma client and the Snippet model delegate's create method.
        const snippet = await db.snippet.create({  // access the Snippet table/model delegate and create a row
            data: {
                title: title || "",
                code: code || "",
            }
        })

        // log the data for now to see the result in the terminal when we submit the form.
        console.log("Created Snippet:", snippet)
        // To see table run npx prisma studio in the terminal and open the Snippet table to see the new row created. 
        // redirect to the homepage (for now) ; change this to redirect to the snippet detail page in the future when we have that set up.
        redirect("/")
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Create New Snippet</h1>
                    <p className="text-slate-400">Share your code snippets with the community</p>
                </div>

                {/* Form Card */}
                <form action={createSnippet} className="bg-slate-800 rounded-lg shadow-2xl border border-slate-700 p-8 space-y-6">

                    {/* Title Field */}
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-200">
                            Snippet Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="e.g., React useEffect Hook Pattern"
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            required
                        />
                    </div>

                    {/* Code Field */}
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-200">
                            Code
                        </label>
                        <textarea
                            name="code"
                            placeholder="Paste your code here..."
                            rows={12}
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition font-mono text-sm"
                            required
                        />
                        <p className="text-xs text-slate-500">Syntax highlighting coming soon</p>
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-3 pt-4">
                        <button
                            type="submit"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                        >
                            Create Snippet
                        </button>
                        <button
                            type="reset"
                            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-slate-500"
                        >
                            Clear
                        </button>
                    </div>
                </form>

                {/* Footer Info */}
                <div className="mt-8 p-4 bg-slate-800 border border-slate-700 rounded-lg">
                    <p className="text-sm text-slate-400">
                        💡 <span className="text-slate-300">Pro tip:</span> Make sure your code snippet is clear and well-commented for better community engagement.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SnippetCreatePage

/*
## PR Summary

### Overview

Integrated Prisma ORM with SQLite database support for learning and experimenting with full-stack data workflows in Next.js. Added initial database configuration, Prisma client setup, and snippet creation functionality using Server Actions.

### Changes Made

* Installed and configured Prisma ORM
* Added SQLite datasource configuration
* Created initial Prisma schema setup
* Added `Snippet` model for storing code snippets
* Configured Prisma client instance in centralized `db` module
* Integrated database operations with Next.js Server Actions
* Implemented snippet creation flow using Prisma `create()` API
* Added environment variable setup for database connection
* Generated and synced database schema using Prisma CLI

### Database Setup

Added Prisma schema with:

* `Snippet` model

  * `id`
  * `title`
  * `code`

### Local Database Storage

* Using SQLite for local development database storage
* Database entries are persisted inside:

  ```text
  prisma/dev.db
  ```
* Data is stored locally on the machine as a physical `.db` file
* Prisma directly reads/writes data to this SQLite database file
* Useful for lightweight development and learning workflows without requiring a separate database server

### Production Database Understanding

* Current setup uses a local SQLite database intended for development and learning
* In production environments, applications typically connect to a shared cloud-hosted database instead of a local `.db` file
* Common production databases/services:

  * PostgreSQL
  * MySQL
  * Neon
  * Supabase
  * PlanetScale
* Production applications use a centralized database connection through `DATABASE_URL`
* This allows multiple users to read/write shared application data from anywhere

### Development Workflow Added

* Prisma Client generation
* Database schema synchronization
* Prisma Studio support for viewing database entries
* SQLite local database integration

### Notes / Learnings

* Resolved Prisma v7 configuration issues by moving to Prisma v6 setup
* Learned Prisma client generation workflow
* Learned TypeScript/VS Code cache troubleshooting:

  * Restart TS Server
  * Reload VS Code Window
* Learned Prisma model naming conventions:

  * `model Snippet` → `db.snippet`

### Result

The application can now persist snippet data using Prisma ORM with SQLite while supporting modern Next.js Server Actions workflow.


*/