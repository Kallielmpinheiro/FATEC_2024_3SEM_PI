from mongoengine import connect

def connectMongoDB():
    try:
        connect('userPerfil', host='localhost', port=27017)
    except Exception as e:
        print(f"Erro ao conectar ao MongoDB: {e}")
        return None        