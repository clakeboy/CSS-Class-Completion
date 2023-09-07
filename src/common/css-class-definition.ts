import * as vscode from "vscode";

class CssClassDefinition {
    public constructor(public className: string,public baseName:string, public location?: vscode.Location) { }
}

export default CssClassDefinition;
