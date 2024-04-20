import pydoodle

PYDOODLE_CLIENT_ID="ae1341bf494ce3c87abd8e3e8dbd11b7"
PYDOODLE_CLIENT_SECRET="a3597fa33f83dc08d5a44584218b1d569c89b5d9a55ecca449ee5bef355a41b7"

c = pydoodle.Compiler(clientId=PYDOODLE_CLIENT_ID, clientSecret=PYDOODLE_CLIENT_SECRET)
result = c.execute(script="print('Hello World')", language="python3")
usage = c.usage()
print(usage, result.output, sep='\n')