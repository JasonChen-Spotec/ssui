function defaultTemplate(
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports },
) {
  const plugins = ['jsx']
  if (opts.typescript) {
    plugins.push('typescript')
  }

  exports.declaration.name = exports.declaration.name.replace('Svg', '')
  componentName.name = componentName.name.replace('Svg', '')
  const typeScriptTpl = template.smart({ plugins })
  return typeScriptTpl.ast`${imports}
    ${interfaces}
    import Icon from 'assui/lib/components/Icon';

    function ${componentName}(componentProps) {
      const IconNode = (props) => ${jsx};
      return <Icon {...componentProps} component={IconNode} />;
    }
    ${exports}
  `
}
module.exports = defaultTemplate
