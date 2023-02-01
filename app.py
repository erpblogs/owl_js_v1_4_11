#!/usr/bin/env python3

import threading
import time

from http.server import HTTPServer
from server.http import Server


HOST_NAME = 'localhost'
PORT = 8000

Handler = HTTPServer((HOST_NAME, PORT), Server)


def start_server():
    Handler.serve_forever()


if __name__ == "__main__":
    print("Owl Application")
    print("---------------")
    print(f"Server running on:'http://{HOST_NAME}:{PORT}")

    threading.Thread(target=start_server, daemon=True).start()

    while True:
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            Handler.server_close()
            quit(0)
