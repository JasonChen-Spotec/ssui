function defaultTemplate(
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports },
) {
  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }

  exports.declaration.name = exports.declaration.name.replace('Svg', '');
  componentName.name = componentName.name.replace('Svg', '');
  const typeScriptTpl = template.smart({ plugins });

  return typeScriptTpl.ast`${imports}
    ${interfaces}
    import Icon, { IconProps } from 'a-base-icon/lib/icon';

    function ${componentName}(componentProps: IconProps) {
      const IconNode = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
      return <Icon {...componentProps} component={IconNode} />;
    }

    ${componentName}.displayName = '${componentName.name}'

    ${exports}
  `;
}
module.exports = defaultTemplate;
