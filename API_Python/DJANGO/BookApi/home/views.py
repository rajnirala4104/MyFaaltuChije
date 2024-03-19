from rest_framework.decorators import  api_view
from rest_framework.response import Response

@api_view(['GET'])
def index(request):

    if request.method == 'GET':
        dummyBookData = [{
                "bookName": "Few Days",
                "author": "raj nirala",
                "price": 499,
                "discription": "this a fictional story or you can say love story",
                "catogary": "finctional"
            },
            {
                "bookName": "Few Days",
                "author": "raj nirala",
                "price": 499,
                "discription": "this a fictional story or you can say love story",
                "catogary": "finctional"
            },]

        return Response({
            "message":"api is running successfully",
            "status" : 200,
            "data": dummyBookData
        })