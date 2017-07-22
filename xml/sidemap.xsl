<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html>
 <head>
 </head>
<body style="background-color:#f63400; font-family:verdana, sans-serif; color:#fff">  
    <h3>Sidemap</h3>
    <xsl:apply-templates />
 </body>
 </html>
</xsl:template>

<xsl:template match="link">
  <h4><xsl:value-of select="@name" /></h4>
  <p>
  <xsl:for-each select="sublink">
    <li><xsl:value-of select="." /></li>
  </xsl:for-each>
  </p>
</xsl:template>

</xsl:stylesheet>