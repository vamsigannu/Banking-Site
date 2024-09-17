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
 String name=request.getParameter("name");
 String phno=request.getParameter("phno");
 String email=request.getParameter("email");
 Class.forName("com.mysql.jdbc.Driver");
 Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/vamsi","root","");
 PreparedStatement stmt=con.prepareStatement("insert into contact values(?,?,?)");
 stmt.setString(1, name);
 stmt.setString(2, phno);
 stmt.setString(3 ,email);
 stmt.executeUpdate();
 response.sendRedirect("home.html");
 %>
</body>
</html>