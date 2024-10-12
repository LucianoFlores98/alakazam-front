import { Typography, Avatar, Rating } from "@material-tailwind/react";

export function FeaturedReview() {
  return (
    <div className="px-8 text-center">
      <Typography variant="h2" color="indigo" className="mb-6 font-medium" textGradient>
        &quot;Alto departamento, queda todo cerca y el dueño es muy respetuoso.&quot;
      </Typography>
      <Avatar
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image"
        size="lg"
      />
      <Typography variant="h6" className="mt-4">
        Jorgito
      </Typography>
      <Typography color="gray" className="mb-2 font-normal">
        Inquilino durante 2 años y 4 meses
      </Typography>
      <Rating value={5} readonly />
    </div>
  );
}