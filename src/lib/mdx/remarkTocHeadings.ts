import { VFile } from 'vfile'
import { Parent } from 'unist'
import { visit } from 'unist-util-visit'
import { slug } from 'github-slugger'
import { toString } from 'mdast-util-to-string'
import { remark } from 'remark'

export type Toc = {
  value: string
  depth: number
  url: string
}

function remarkTocHeadings() {
  return function (tree: Parent, file: VFile) {
    const toc: Toc[] = []

    visit(tree, 'heading', (node: { depth: number }) => {
      toc.push({
        value: toString(node),
        url: `#${slug(toString(node))}`,
        depth: node.depth,
      })
    })

    file.data = toc as never
  }
}

export async function extractTocHeadings(markdown: string) {
  const processed = await remark().use(remarkTocHeadings).process(markdown)

  return processed.data as unknown
}
