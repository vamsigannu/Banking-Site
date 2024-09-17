<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%
String uname=request.getParameter("username");
String password=request.getParameter("password");
String cpassword=request.getParameter("confirmpassword");
String email=request.getParameter("email");
String addr=request.getParameter("address");
String phno=request.getParameter("phno");
Class.forName("com.mysql.jdbc.Driver");
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/vamsi", "root", "");
PreparedStatement stmt=con.prepareStatement("insert into account values(?,?,?,?,?,?)");
stmt.setString(1, uname);
stmt.setString(2, password);
stmt.setString(3, cpassword);
stmt.setString(4, email);
stmt.setString(5, addr);
stmt.setString(6, phno);
stmt.executeUpdate();
response.sendRedirect("home.html");
%>
</body>
</html>