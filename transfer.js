export default (template, option) =>
  template.replace(/{{(.*)}}/g, ($0, $1) => option[$1] || $1);
