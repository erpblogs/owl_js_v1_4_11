# -*- coding:utf-8 -*-

import os
from http.server import BaseHTTPRequestHandler

"""
    create a simple http request
        BaseHTTPRequestHandler được sử dụng để xử lý các yêu cầu HTTP đến máy chủ.
        Ngoài ra BaseHTTPRequestHandler còn hỗ trợ một số thuộc tính và phương thức sau:

        do_GET(): Phương thức này xử lý khi có yêu cầu GET gửi lên.
        do_POST(): Phương thức này xử lý khi có yêu cầu POST gửi lên.
        path: Thuộc tính này trả về path của request.
        send_error(): Phương thức này trả về lỗi HTTP cho client.
        """

CLIENT_PATH = 'client/website'
HOME_PAGE_URL = ['', 'home']


class Server(BaseHTTPRequestHandler):
    def do_GET(self):
        relative_path = self.path.split('/')[1]
        if relative_path in HOME_PAGE_URL:
            relative_path = 'home'

        try:
            split_path = os.path.splitext(self.path)
            request_extension = split_path[1]
            if request_extension != ".py":
                if request_extension == "":
                    self.path = f'{relative_path}/index.html'

                asset_path = os.path.abspath(f'{CLIENT_PATH}/{self.path}')
                f = open(asset_path).read()
                # f = open(self.path[1:]).read()
                self.send_response(200)
                # self.send_header("Content-type", "text/html")
                self.end_headers()
                self.wfile.write(bytes(f, 'utf-8'))
            else:
                f = "File not found"
                self.send_error(404, f)
        except:
            f = "File not found"
            self.send_error(404, f)
