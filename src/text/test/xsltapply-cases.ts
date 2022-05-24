export const testCases: Array<[string, string, string]> = [
  [
    /* from https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor/Basic_Example*/
    `
    <?xml version="1.0"?>
    <?xml-stylesheet type="text/xsl" href="example.xsl"?>
    <Article>
      <Title>My Article</Title>
      <Authors>
        <Author>Mr. Foo</Author>
        <Author>Mr. Bar</Author>
      </Authors>
      <Body>This is my article text.</Body>
    </Article>
    `,
    `<?xml version="1.0"?>
      <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
      <xsl:output method="text"/>
      <xsl:template match="/">
        Article - <xsl:value-of select="/Article/Title"/>
        Authors:<xsl:apply-templates select="/Article/Authors/Author"/>
      </xsl:template>
    <xsl:template match="Author">
      - <xsl:value-of select="." />
    </xsl:template>
    </xsl:stylesheet>
  `,
    `
        Article - My Article
        Authors:
      - Mr. Foo
      - Mr. Bar`
  ]
];
