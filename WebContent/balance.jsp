<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
String accno = request.getParameter("accountno");
String uname = request.getParameter("username");
String password = request.getParameter("password");
Class.forName("com.mysql.jdbc.Driver");
Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/vamsi", "root", "");
PreparedStatement stmt = con.prepareStatement("INSERT INTO balance VALUES (?, ?, ?)");
stmt.setString(1, accno);
stmt.setString(2, uname);
stmt.setString(3, password);
stmt.executeUpdate();

stmt.close();
con.close();

response.sendRedirect("home.html");
 
%>
</body>
</html>
