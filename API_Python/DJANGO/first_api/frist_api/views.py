from django.http import HttpResponse, JsonResponse

def homePage(req):

    dummyDataObject = {
        "message": "api is running successfully",
        "data" : None
    }

    return JsonResponse(dummyDataObject, safe=False) # ----- to send data in json format
    # return HttpResponse(json.dump(dummyDataObject), contenttype='aplication/json') # ---- this is another method
    