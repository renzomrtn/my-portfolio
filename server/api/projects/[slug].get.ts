import { readFile } from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  
  try {
    const filePath = join(process.cwd(), 'content', 'projects', `${slug}.md`)
    const fileContent = await readFile(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    
    return {
      ...data,
      body: content,
      slug,
      _path: `/projects/${slug}`
    }
  } catch (error) {
    console.error('Error reading project:', error)
    throw createError({
      statusCode: 404,
      message: 'Project not found'
    })
  }
})