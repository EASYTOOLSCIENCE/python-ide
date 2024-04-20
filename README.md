![python-ide](https://github.com/EASYTOOLSCIENCE/python-ide/assets/137708737/74206d83-89e2-4e2d-81f6-8eb2765fa4e4)

Python version 3.10



### Snippets

<details>

<summary>Button.jsx</summary>

```
<button type="submit" 
  className={`
          px-4 py-2 rounded-full 
          flex items-center gap-2 
          text-white
          shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
          transition-all
          hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
          hover:text-white 
      `}
>
  Submit
</button>
``` 
</details>

<details>

<summary>style.css</summary>

```
.editor {
    display: inline-flex;
    gap: 10px;
    font-family: monospace;
    line-height: 21px;
    background: #1e1e1e;
    border-radius: 2px;
    padding: 20px 10px;
    width: 100%;
  }

  .line-numbers {
    width: 20px;
    text-align: right;
  }

  .line-numbers span {
    counter-increment:  linenumber;
  }

  .line-numbers span::before {
    content: counter(linenumber);
    display: block;
    color: #506882;
  }

  textarea {
    line-height: 21px;
    overflow-y: hidden;
    padding: 0;
    border: 0;
    background: #282a3a;
    color: #FFF;
    width: 100%;
    min-height: 50vh;
    outline: none;
    resize: none;
  }
``` 
</details>


<details>
<summary>serveur_test.py</summary>

```
import pydoodle

PYDOODLE_CLIENT_ID=<your_client_id>
PYDOODLE_CLIENT_SECRET=<your_client_secret>

c = pydoodle.Compiler(clientId=PYDOODLE_CLIENT_ID, clientSecret=PYDOODLE_CLIENT_SECRET)
result = c.execute(script="print('Hello World')", language="python3")
usage = c.usage()
print(usage, result.output, sep='\n')
``` 
</details>
