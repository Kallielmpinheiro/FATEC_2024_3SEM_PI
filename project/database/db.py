from mongoengine import connect

# Temporario
def connectMongoDB():
    try:
        connect('userPerfil', host='localhost', port=27017)
        print("Conectado ao MongoDB")
    except Exception as e:
        print(f"Erro ao conectar ao MongoDB: {e}")
        return None        