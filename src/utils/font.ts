const benton = [
  "lucida grande", 
  "lucida sans unicode", 
  "lucida", 
  "helvetica", 
  "Hiragino Sans GB", 
  "Microsoft YaHei", 
  "WenQuanYi Micro Hei", 
  "sans-serif"
]
/**
 * Return a font stack
 * @param  {String} family The name of the font family; one of "benton", "miller"
 * @return {String}        Font stack
 */
export default function font() {
  const fontFamily = benton;
  if (!fontFamily) { return ""; }
  return fontFamily.join(", ");
}