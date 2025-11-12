import { readdir, readFile } from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'

export default defineEventHandler(async () => {
  try {
    const contentDir = join(process.cwd(), 'content', 'projects')
    const files = await readdir(contentDir)
    
    const projects = await Promise.all(
      files
        .filter(file => file.endsWith('.md'))
        .map(async (file) => {
          const filePath = join(contentDir, file)
          const fileContent = await readFile(filePath, 'utf-8')
          const { data, content } = matter(fileContent)
          
          return {
            ...data,
            body: content,
            slug: file.replace('.md', ''),
            _path: `/projects/${file.replace('.md', '')}`
          }
        })
    )
    
    // Sort by date descending with proper typing
    return projects.sort((a: any, b: any) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0
      const dateB = b.date ? new Date(b.date).getTime() : 0
      return dateB - dateA
    })
  } catch (error) {
    console.error('Error reading projects:', error)
    return []
  }
})