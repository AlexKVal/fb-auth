export default function slug(title) {
  return title.replace(/\s/g, '_').replace(/[^a-zA-Z0-9-_]/g, '');
}
