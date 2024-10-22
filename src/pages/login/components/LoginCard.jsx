import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import UseLogin from "@/hooks/useLogin";

const LoginCard = () => {
  const { formData, success, error, isLoading, handleChange, handleLogin } =
    UseLogin();

  return (
    <div className="relative">
      <p className="py-5 text-3xl font-heading">Welcome !! ✨</p>
      {success && (
        <Alert>
          <Terminal className="w-4 h-4" />
          <AlertTitle>Login Success</AlertTitle>
          <AlertDescription>Login Success</AlertDescription>
        </Alert>
      )}
      {error && (
        <Alert variant="destructive">
          <Terminal className="w-4 h-4" />
          <AlertTitle>{error}</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Tabs defaultValue="account" className="w-[350px] lg:w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Sign In</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card className="bg-main">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Please enter your credentials to access the application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-white text-text dark:bg-secondaryBlack dark:text-darkText"
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoginCard;
