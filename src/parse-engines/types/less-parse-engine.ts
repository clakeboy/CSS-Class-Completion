import * as css from "css";
//@ts-ignore
import less from 'less/lib/less-node';
import CssClassDefinition from "../../common/css-class-definition";
import CssClassExtractor from "../common/css-class-extractor";
import IParseEngine from "../common/parse-engine";
import ISimpleTextDocument from "../common/simple-text-document";

class LessParseEngine implements IParseEngine {
    public languageId = "less";
    public extension = "less";

    public async parse(textDocument: ISimpleTextDocument): Promise<CssClassDefinition[]> {
        const code: string = textDocument.getText();
        const res:Less.RenderOutput = await less.render(code);
        const codeAst: css.Stylesheet = css.parse(res.css);
        return CssClassExtractor.extract(codeAst,textDocument.baseName);
    }
}

export default LessParseEngine;
