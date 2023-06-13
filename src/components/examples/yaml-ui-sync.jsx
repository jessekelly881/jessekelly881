import React, { useState } from 'react';
import { StreamLanguage } from "@codemirror/language";
import * as yamlMode from "@codemirror/legacy-modes/mode/yaml";
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { dracula, draculaInit } from '@uiw/codemirror-theme-dracula';
import { parse, parseDocument } from "yaml"

import Input from "../ui/Input";
import Label from "../ui/Label";


const theme = createTheme({
  settings: {
    background: "#282A36",
    gutterBackground:  "#282A36",
    foreground: "#6272A4",
    gutterForeground: "#EEE",
    selection: "#AAA"
  }
})

const code = `# YAML
# Some comment

title: YAML Example # title
description: Example description #des`

const yaml = StreamLanguage.define(yamlMode.yaml)

function App() {
  const [raw, setRaw] = useState(code);

  let obj = {}
  try { obj = parse(raw) }
  catch {}

  const updateNode = (path, value) => {
    const doc = parseDocument(raw)
    const node = doc.get(path, true)
    node.value = value
    const str = doc.toString()
    setRaw(str)
  }

  return (
    <div className="my-12">
      <div className="flex gap-4">
        <div className="w-full">
          <Label htmlFor="title">Title</Label>
          <Input 
            id="title"
            value={obj.title ?? ""} 
            onChange={e => updateNode("title", e.target.value)} 
          />
        </div>
        <div className="w-full">
          <Label htmlFor="description">Description</Label>
          <Input 
            id="description"
            value={obj.description ?? ""} 
            onChange={e => updateNode("description", e.target.value)} 
          />
        </div>
        </div>
        <br />
        <div className="bg-[#282A36] text-[15px] p-3 rounded-[0.25rem]">
            <CodeMirror
              value={raw}
              height="200px"
              extensions={[yaml]}
              onChange={setRaw}
              theme={dracula}
            />
        </div>
    </div>
  );

}

export default App;