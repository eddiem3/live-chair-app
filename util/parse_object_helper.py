import json,httplib,random
from faker import Factory



connection = httplib.HTTPSConnection('api.parse.com', 443)
connection.connect()

curl_info = {"X-Parse-Application-Id": "AciTImnrweQaaTcXHAndBNXerF5RFgClRM56n5Qv",
             "X-Parse-REST-API-Key": "bbToBRmZWelrPGlYIwzyhBPyyd8WyLELanUmIB7R",
             "X-Parse-Revocable-Session": "1",
             "Content-Type": "application/json"}

def generate_users(num_users):
#Create users and send to Parse
    for n in range(num_users):

        #Create a fake user
        faker = Factory.create()
        email = faker.email()
        
        #Post data from our newly creater user to Parse
        connection.request('POST', '/1/users', json.dumps({
            "username": email,
            "email":email,
            "password": faker.sha1(),
            "type":random.randint(0,2)
                              
            
        }), curl_info)
        result = json.loads(connection.getresponse().read())
        print result

    
def get_users():
    connection.request('GET', '/1/users', '', {
        "X-Parse-Application-Id": "AciTImnrweQaaTcXHAndBNXerF5RFgClRM56n5Qv",
        "X-Parse-REST-API-Key": "bbToBRmZWelrPGlYIwzyhBPyyd8WyLELanUmIB7R"
        #curl_info
             })
    result = json.loads(connection.getresponse().read())

    ids = []
    
    for k,v in result.iteritems():
        for l in v:
            ids.append(l["objectId"])
    
            
    print ids
    return ids



def generate_barbers(ids):

    for n in range(len(ids)-1):

        faker = Factory.create()


        skills = ['afro', 'bob', 'bowl', 'corn', 'rows']

        #Generate image url
        base_url = "https://randomuser.me/api/portraits/thumb/"   
        if n % 2 == 0:         
            image = base_url + "men/" +str(random.randint(0,90)) +".jpg"
        else:
            image = base_url + "women/" +str(random.randint(0,90)) +".jpg"
                                           
    
        connection.request('POST', '/1/classes/Barber', json.dumps({
            "name": faker.name(),
            "shopName": faker.company(),
            "skills": skills,
            "profilePhoto": image,
            "user": {
                "__type": "Pointer",
                "className": "_User",
                "objectId": ids[n]
            }
                
            
                    
        }), {
            #curl_info
            "X-Parse-Application-Id": "AciTImnrweQaaTcXHAndBNXerF5RFgClRM56n5Qv",
            "X-Parse-REST-API-Key": "bbToBRmZWelrPGlYIwzyhBPyyd8WyLELanUmIB7R",
            "Content-Type": "application/json"
        })
        results = json.loads(connection.getresponse().read())
        print results
    


    
if __name__== '__main__':
    #generate_users(10)
     object_ids = get_users()
     generate_barbers(object_ids)
                           
                        

                           
                           
# "name": faker.name(),
#             "shopName": faker.company(),
#             "skills": skills,
#             "profilePhoto": image,
#             "user": {
#                 "__op": "AddRelation",
#                 "objects": [
#                     {
#                         "__type": "Pointer",
#                         "className": "_User",
#                         "objectId": ids[n]
#                     }
#                 ]
#             }
