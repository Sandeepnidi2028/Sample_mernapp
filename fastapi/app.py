from fastapi import FastAPI

app = FastAPI()

@app.get("/getStudents")
def getStudents():
    return "get student method called"
#localhost:8000/getStudents => post
@app.post("/addStudent")
def addStudent():
    return "add student method called" 
@app.put("/updateStudent")
def updateStudent():
    return "update student method called"
#localhost:8000/getStudents => post
@app.delete("/deleteStudent")
def deleteStudent():
    return "delete student method called" 
