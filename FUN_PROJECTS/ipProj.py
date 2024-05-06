import socket

def get_ip_address(url):
    try:
        ip_address = socket.gethostbyname(url)
        return ip_address
    except socket.error as err:
        return f"Error: {err}"

if __name__ == "__main__":
    website = input("Enter the website URL: ")
    ip_address = get_ip_address(website)
    print(f"The IP address of {website} is: {ip_address}")